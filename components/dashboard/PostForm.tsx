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
import dynamic from 'next/dynamic';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { TFormProps } from '@/types/form-types';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageUploadInput from './ImageUploadInput';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import MultiImageUploadInput from './MultiImageUploadInput';
import { Textarea } from '../ui/textarea';
import { X } from 'lucide-react';
import { Badge } from '../ui/badge';

const categories = [
    { value: "government", name: "সরকারি চাকরি" },
    { value: "private", name: "বেসরকারি চাকরি" },
    { value: "autonomous", name: "স্বায়ত্তশাসিত" },
];

const departments = [
    'engineering',
    'marine',
    'textile',
    'agriculture',
    'livestock',
    'fisheries',
    'forestry',
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
                        <div className="grid grid-cols-1 gap-6">
                            {/*Title*/}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <Label htmlFor="title">চাকরির শিরোনামঃ</Label>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                id="title"
                                                placeholder="চাকরির নাম লিখুন (যেমন: উপ-সহকারী প্রকৌশলী)"
                                                rows={5}
                                            />
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
                                            <Textarea id="companyName" placeholder="কোম্পানির নাম লিখুন" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        {/*Title, Company Name, Vacancy,*/}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {/*Category Post*/}
                            <FormField
                                control={form.control}
                                name="categories"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ক্যাটাগরিঃ</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="একটি ক্যাটাগরি নির্বাচন করুন" />
                                                </SelectTrigger>
                                                <SelectContent className="w-full">
                                                    {categories.map((category) => (
                                                        <SelectItem key={category.value} value={category.value}>
                                                            {category.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
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
                                            <Input id="vacancy" placeholder="N" {...field} />
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
                                        <Label htmlFor="deadline">আবেদনের শেষ তারিখঃ</Label>
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

                        </div>
                    </CardContent>
                </Card>
                <Card className="border rounded-lg overflow-hidden">
                    <CardContent className="space-y-8 flex flex-col md:flex-row">
                        <div className="flex-2/6">
                            <ImageUploadInput control={form.control} name="banner" label="ব্যানার আপলোডঃ" />
                        </div>
                        <div className="flex-4/6">
                            <MultiImageUploadInput control={form.control} name="images" label="বিজ্ঞপ্তির ছবি আপলোডঃ" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="border rounded-lg overflow-hidden">
                    <CardContent className="">
                        <FormField
                            control={form.control}
                            name="departments"
                            render={({ field }) => (
                                <FormItem>
                                    <Label className="text-sm font-medium">ডিপ্লোমা বিভাগ:</Label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {departments.map((department) => {
                                            const isSelected = field.value?.includes(department);
                                            return (
                                                <Button
                                                    key={department}
                                                    type="button"
                                                    variant={isSelected ? "default" : "outline"}
                                                    size="sm"
                                                    onClick={() => {
                                                        const updated = isSelected
                                                            ? field.value.filter((t: string) => t !== department)
                                                            : [...(field.value || []), department];

                                                        field.onChange(updated);
                                                    }}
                                                    className="text-left py-2 px-3"
                                                >
                                                    {department}
                                                </Button>
                                            );
                                        })}
                                    </div>

                                    {field.value?.length > 0 && (
                                        <div className="space-y-2 mt-2">
                                            <Label>Selected:</Label>
                                            <div className="flex flex-wrap gap-2">
                                                {field.value.map((department: string) => (
                                                    <Badge
                                                        key={department}
                                                        variant="secondary"
                                                        className="px-3 py-1"
                                                    >
                                                        {department}
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() =>
                                                                field.onChange(field.value.filter((t: string) => t !== department))
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
                                {form.formState.isSubmitting ? "🚀 Posting..." : "🚀 Click"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </Form>
    )
}

export default PostForm;