import React from 'react';
import { Stack } from 'react-bootstrap';
import { LogoCard } from 'components/logo-card';
import { ComponentsCard } from 'components/components-card';

function LeftColumn() {
    
    return (
        <Stack gap={5} className="p-5">
            <LogoCard />
            <ComponentsCard />
        </Stack>
    );
}

export default LeftColumn;