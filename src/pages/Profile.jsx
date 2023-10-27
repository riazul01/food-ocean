import React from 'react';
import AppLayout from '../layouts/AppLayout';
import ProfileLayout from '../layouts/ProfileLayout';

const Profile = () => {
    return (
        <AppLayout>
            <ProfileLayout>
                <h1>Hello!</h1>
            </ProfileLayout>
        </AppLayout>
    );
}

export default Profile;