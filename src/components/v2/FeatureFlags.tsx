import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import config from '@/config'

export const FeatureFlags: React.FC = () => {
    const features = [
        {
            key: 'analytics',
            label: 'Analytics',
            enabled: config.features.analytics,
        },
        { key: 'debug', label: 'Debug Mode', enabled: config.features.debug },
        {
            key: 'maintenance',
            label: 'Maintenance Mode',
            enabled: config.features.maintenance,
        },
    ]

    return (
        <Card className='w-full max-w-md'>
            <CardHeader>
                <CardTitle>Feature Flags v2.0.0</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
                {features.map(feature => (
                    <div
                        key={feature.key}
                        className='flex items-center justify-between'
                    >
                        <div className='flex items-center space-x-2'>
                            <Checkbox
                                checked={feature.enabled}
                                disabled
                                className='pointer-events-none'
                            />
                            <span className='text-sm font-medium'>
                                {feature.label}
                            </span>
                        </div>
                        <Badge
                            variant={feature.enabled ? 'default' : 'secondary'}
                        >
                            {feature.enabled ? 'ON' : 'OFF'}
                        </Badge>
                    </div>
                ))}
                <div className='pt-2 border-t'>
                    <p className='text-xs text-muted-foreground'>
                        Feature flags are controlled by environment
                        configuration. This is a v2.0.0 feature for better
                        environment management.
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
