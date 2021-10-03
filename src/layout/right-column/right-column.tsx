import React from 'react';
import { Stack } from 'react-bootstrap';
import { SettingsCard } from 'components/settings-card';

function RightColumn() {
    
    return (
        <Stack gap={5} className="p-5">
            <SettingsCard />
        </Stack>
    );
}

export default RightColumn;