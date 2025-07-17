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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { TFormProps } from '@/types/form-types';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageUploadInput from './ImageUploadInput';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import MultiImageUploadInput from './MultiImageUploadInput';

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
                            {/*Category Post*/}
                            <FormField
                                control={form.control}
                                name="categories"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ক্যাটাগরিঃ</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="একটি ক্যাটাগরি নির্বাচন করুন" />
                                                </SelectTrigger>
                                                <SelectContent className='w-full'>
                                                    <SelectItem value="government">সরকারি চাকরি</SelectItem>
                                                    <SelectItem value="private">বেসরকারি চাকরি</SelectItem>
                                                    <SelectItem value="autonomous">স্বায়ত্তশাসিত</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/*Title*/}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="title">চাকরির শিরোনামঃ</Label>
                                        <FormControl>
                                            <Input id="title" placeholder="চাকরির নাম লিখুন (যেমন: উপ-সহকারী প্রকৌশলী)" {...field} />
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
                                        <Label htmlFor="companyName">কোন কোম্পানিতে চাকরিঃ</Label>
                                        <FormControl>
                                            <Input id="companyName" placeholder="কোম্পানির নাম লিখুন" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/*Apply Link*/}
                            <FormField
                                control={form.control}
                                name="websiteLink"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="websiteLink">কোম্পানির ওয়েবসাইট লিঙ্কঃ</Label>
                                        <FormControl>
                                            <Input id="websiteLink" type='url' placeholder="https://example.com" {...field} />
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
                                        <Label htmlFor="published">প্রকাশের তারিখঃ</Label>
                                        <FormControl>
                                            <ReactDatePicker
                                                id="published"
                                                placeholderText="তারিখ নির্বাচন করুন"
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
                                        <Label htmlFor="applyStart">আবেদন শুরুর দিনঃ</Label>
                                        <FormControl>
                                            <ReactDatePicker
                                                id="applyStart"
                                                placeholderText="তারিখ নির্বাচন করুন"
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
                                        <Label htmlFor="deadline">আবেদনের শেষ দিনঃ</Label>
                                        <FormControl>
                                            <ReactDatePicker
                                                id="deadline"
                                                placeholderText="তারিখ নির্বাচন করুন"
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
                                        <Label htmlFor="vacancy">ডিপ্লোমাদের জন্য শূন্য পদঃ</Label>
                                        <FormControl>
                                            <Input id="vacancy" type='number' {...field} />
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
                                    <Label className="text-sm font-medium">শিক্ষাগত যোগ্যতাঃ</Label>
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
                <Card className="border rounded-lg overflow-hidden">
                    <CardContent className="space-y-8 flex ">
                        <div className="flex-2/6">
                            <ImageUploadInput control={form.control} name="banner" label="ব্যানার আপলোডঃ" />
                        </div>
                        <div className="flex-4/6">
                            <MultiImageUploadInput control={form.control} name="images" label="বিজ্ঞপ্তির ছবি আপলোডঃ" />
                        </div>
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
                                {form.formState.isSubmitting ? "🚀 Posting..." : "📢 Post Circular"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </Form>
    )
}

export default PostForm;