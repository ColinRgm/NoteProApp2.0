import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('rounded-lg border bg-card text-card-foreground shadow-xs', className)} {...props} />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
                                                                                               className,
                                                                                               ...props
                                                                                           }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

// const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
//     <div ref={ref} className={cn('text-xl font-semibold leading-none tracking-tight mt-[-32px] ml-[-35px] pb-2 px-5 bg-white w-fit', className)} {...props} />
// ));
// CardTitle.displayName = 'CardTitle';

const CardTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'; margin?: 'small' | 'big' }
>(({ className, size = 'xl', margin = 'small', ...props }, ref) => {
    const sizeClass = {
        sm: 'text-sm',
        md: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl',
        xxl: 'text-3xl'
    };

    const marginClass = {
        small: 'mt-[-30px]',
        big: 'mt-[-37px]'
    };

    return (
        <div
            ref={ref}
            className={cn(
                sizeClass[size],
                marginClass[margin],
                'font-semibold leading-none tracking-tight ml-[-55px] pb-4 px-7 bg-white w-fit',
                className
            )}
            {...props}
        />
    );
});

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
                                                                                                    className,
                                                                                                    ...props
                                                                                                }, ref) => (
    <div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
                                                                                                className,
                                                                                                ...props
                                                                                            }, ref) => (
    <div ref={ref} className={cn('p-7 flex items-center justify-center', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
                                                                                               className,
                                                                                               ...props
                                                                                           }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
