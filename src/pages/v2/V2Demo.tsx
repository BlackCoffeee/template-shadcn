import React from 'react'
import { VersionInfo } from '@/components/v2/VersionInfo'
import { FeatureFlags } from '@/components/v2/FeatureFlags'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const V2Demo: React.FC = () => {
    return (
        <div className='container mx-auto p-6 space-y-6'>
            <div className='text-center space-y-2'>
                <h1 className='text-4xl font-bold'>Template Shadcn v2.0.0</h1>
                <p className='text-muted-foreground'>
                    Welcome to the new version with enhanced environment
                    management
                </p>
                <Badge variant='outline' className='text-lg px-4 py-2'>
                    Version 2.0.0 Development
                </Badge>
            </div>

            <Separator />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <VersionInfo />
                <FeatureFlags />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>What's New in v2.0.0?</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <h3 className='font-semibold text-green-600'>
                                ✅ Enhanced Features
                            </h3>
                            <ul className='text-sm space-y-1 text-muted-foreground'>
                                <li>• Improved environment management</li>
                                <li>• Better configuration system</li>
                                <li>• Enhanced build optimization</li>
                                <li>• New feature flags system</li>
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='font-semibold text-blue-600'>
                                🔧 Technical Improvements
                            </h3>
                            <ul className='text-sm space-y-1 text-muted-foreground'>
                                <li>• TypeScript-based config management</li>
                                <li>• Environment-specific builds</li>
                                <li>• Better error handling</li>
                                <li>• Optimized bundle splitting</li>
                            </ul>
                        </div>
                    </div>

                    <Separator />

                    <div className='flex gap-2'>
                        <Button variant='default'>
                            Explore v2.0.0 Features
                        </Button>
                        <Button variant='outline'>View Documentation</Button>
                    </div>
                </CardContent>
            </Card>

            <Card className='border-dashed'>
                <CardContent className='pt-6'>
                    <div className='text-center space-y-2'>
                        <h3 className='font-semibold'>
                            Development Environment Active
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                            This is the development version of v2.0.0. Changes
                            here won't affect the stable v1.1.0 release.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
