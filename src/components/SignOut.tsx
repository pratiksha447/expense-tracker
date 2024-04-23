import { signOut } from 'aws-amplify/auth';

export async function handleSignOut() {
    try {
        await signOut();
    } catch (error) {
        console.log('Error signing out: ', error);
    }
}