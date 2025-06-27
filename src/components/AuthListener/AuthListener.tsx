'use client';

import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';

import { auth } from '@/utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '@/utils/firebase/firebase.utils';

import { useAppDispatch } from '@/store/store';
import { setCurrentUser } from '@/store/user/user.slice';

export function AuthListener() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: FirebaseUser | null) => {
      if (user) {
        await createUserDocumentFromAuth(user);

        const token = await user.getIdToken();

        dispatch(
          setCurrentUser({
            email: user.email,
            displayName: user.displayName,
            accessToken: token,
          }),
        );
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return null;
}
