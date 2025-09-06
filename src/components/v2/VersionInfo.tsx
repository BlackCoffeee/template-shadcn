import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import config from '@/config'

export const VersionInfo: React.FC = () => {
    return (
        <Card className='w-full max-w-md'>
            <CardHeader>
                <CardTitle className='flex gap-2 items-center'>
                    Version Information
                    <Badge variant='secondary'>v2.0.0</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
                <div className='flex justify-between'>
                    <span className='text-sm font-medium'>App Name:</span>
                    <span className='text-sm'>{config.app.name}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-sm font-medium'>Version:</span>
                    <span className='font-mono text-sm'>
                        {config.app.version}
                    </span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-sm font-medium'>Environment:</span>
                    <Badge variant='outline'>{config.app.environment}</Badge>
                </div>
                <div className='flex justify-between'>
                    <span className='text-sm font-medium'>API Base URL:</span>
                    <span className='font-mono text-xs text-sm'>
                        {config.api.baseUrl}
                    </span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-sm font-medium'>Debug Mode:</span>
                    <Badge
                        variant={
                            config.features.debug ? 'default' : 'secondary'
                        }
                    >
                        {config.features.debug ? 'Enabled' : 'Disabled'}
                    </Badge>
                </div>
                <div className='flex justify-between'>
                    <span className='text-sm font-medium'>Analytics:</span>
                    <Badge
                        variant={
                            config.features.analytics ? 'default' : 'secondary'
                        }
                    >
                        {config.features.analytics ? 'Enabled' : 'Disabled'}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    )
}
