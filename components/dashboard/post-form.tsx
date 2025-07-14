"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { TFormProps } from '@/types/form-types';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const technologyOptions = [
    'computer',
    'electrical',
    'mechanical',
    'civil',
    'power',
    'electronics',
    'architecture',
    'survey',
    'food',
    'telecommunication',
    'marine',
    'shipbuilding'
];

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then(mod => mod.default), {
    ssr: false,
});

const PostForm = ({ onSubmit, form }: TFormProps) => {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card className="border rounded-lg overflow-hidden">
                    <CardContent className="p-6 space-y-8">
                        {/*Title, Company Name, Vacancy, Apply Link, Image*/}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/*Title*/}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="title">Title</Label>
                                        <FormControl>
                                            <Input id="title" placeholder="circular title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/*Company Name*/}
                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="companyName">Company Name</Label>
                                        <FormControl>
                                            <Input id="companyName" placeholder="company name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/*Upload Image*/}
                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="image">Image Link</Label>
                                        <FormControl>
                                            <Input id="image" type='url' placeholder="image link" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/*Apply Link*/}
                            <FormField
                                control={form.control}
                                name="applyLink"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="applyLink">Apply Link</Label>
                                        <FormControl>
                                            <Input id="applyLink" type='url' placeholder="apply link" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        {/*Published Date, Apply Start, Apply End*/}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/*Published Date*/}
                            <FormField
                                control={form.control}
                                name="published"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="published">Published</Label>
                                        <FormControl>
                                            <ReactDatePicker
                                                id="published"
                                                placeholderText='Select Date & Time'
                                                selected={field.value ? new Date(field.value) : null}
                                                onChange={field.onChange}
                                                showTimeSelect
                                                dateFormat="Pp"
                                                className="border p-1 rounded-lg w-full"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/*Apply Start*/}
                            <FormField
                                control={form.control}
                                name="applyStart"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="applyStart">Apply Start</Label>
                                        <FormControl>
                                            <ReactDatePicker
                                                id="applyStart"
                                                placeholderText='Select Date & Time'
                                                selected={field.value ? new Date(field.value) : null}
                                                onChange={field.onChange}
                                                showTimeSelect
                                                dateFormat="Pp"
                                                className="border p-1 rounded-lg w-full"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/*Apply End*/}
                            <FormField
                                control={form.control}
                                name="deadline"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="deadline">Deadline</Label>
                                        <FormControl>
                                            <ReactDatePicker
                                                id="deadline"
                                                placeholderText='Select Date & Time'
                                                selected={field.value ? new Date(field.value) : null}
                                                onChange={field.onChange}
                                                showTimeSelect
                                                dateFormat="Pp"
                                                className="border p-1 rounded-lg w-full"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/*Vacancy*/}
                            <FormField
                                control={form.control}
                                name="vacancy"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="vacancy">Vacancy</Label>
                                        <FormControl>
                                            <Input id="vacancy" type='number' placeholder="circular vacancy" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        {/* Technology */}
                        <FormField
                            control={form.control}
                            name="technology"
                            render={({ field }) => (
                                <FormItem>
                                    <Label className="text-sm font-medium">Technology</Label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {technologyOptions.map((tech) => {
                                            const isSelected = field.value?.includes(tech);
                                            return (
                                                <Button
                                                    key={tech}
                                                    type="button"
                                                    variant={isSelected ? "default" : "outline"}
                                                    size="sm"
                                                    onClick={() => {
                                                        const updated = isSelected
                                                            ? field.value.filter((t: string) => t !== tech)
                                                            : [...(field.value || []), tech];

                                                        field.onChange(updated);
                                                    }}
                                                    className="text-left py-2 px-3"
                                                >
                                                    {tech}
                                                </Button>
                                            );
                                        })}
                                    </div>

                                    {field.value?.length > 0 && (
                                        <div className="space-y-2 mt-2">
                                            <Label>Selected:</Label>
                                            <div className="flex flex-wrap gap-2">
                                                {field.value.map((tech: string) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="secondary"
                                                        className="px-3 py-1"
                                                    >
                                                        {tech}
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() =>
                                                                field.onChange(field.value.filter((t: string) => t !== tech))
                                                            }
                                                            className="ml-1 h-4 w-4 p-0"
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </Button>
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                    </CardContent>
                </Card>

                {/* Markdown Editor */}
                <Card className="border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden">
                    <CardHeader className="py-0">
                        <CardTitle className="text-lg font-semibold">📝 Job Description</CardTitle>
                        <CardDescription className="text-sm mt-1">
                            Write the job details using **markdown** format
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-6 space-y-3">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium dark:text-gray-200">
                                Description (Markdown Supported)
                            </Label>
                            <div className="rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden shadow-sm">
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <MDEditor
                                                    value={field.value || ''}
                                                    onChange={(val) => field.onChange(val || '')}
                                                    preview="edit"
                                                    height={300}
                                                    data-color-mode="light"
                                                    className="!bg-white"
                                                />
                                            </FormControl>
                                            <FormMessage className='p-2' />
                                        </FormItem>
                                    )}

                                />
                            </div>

                        </div>
                        {/* Submit Button */}
                        <div className='flex justify-end'>
                            <Button
                                variant="outline"
                                type="submit"
                                size="lg"
                                disabled={form.formState.isSubmitting}
                                className="font-semibold py-2 cursor-pointer disabled:opacity-60"
                            >
                                {form.formState.isSubmitting ? "🚀 Posting..." : "📢 Post"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </Form>
    )
}

export default PostForm;