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
import { Users, Clock, ExternalLink, Upload, X } from 'lucide-react';
import { Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { CreateJobFormProps } from '@/types/jobSchema';

const educationOptions = [
    'High School Diploma',
    'Associate Degree',
    "Bachelor's Degree",
    "Master's Degree",
    'PhD/Doctorate',
    'Professional Certificate',
    'Vocational Training',
    'No Formal Education Required',
];

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then(mod => mod.default), {
    ssr: false,
});

const CreateJobForm = ({
  onSubmit,
  register,
  handleSubmit,
  control,
  errors,
  selectedEducation,
  addEducation,
  removeEducation,
  isSubmitting,
}: CreateJobFormProps) => {
  return (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <Card className="border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden bg-white dark:bg-slate-800">
                        <CardContent className="p-6 space-y-8">
                            {/* Title, Company, Vacancy */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="jobTitle"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >
                                        Job Title
                                    </Label>
                                    <Input
                                        id="jobTitle"
                                        {...register('jobTitle')}
                                        placeholder="e.g., Senior Software Engineer"
                                        className="focus-visible:ring-2 focus-visible:ring-blue-500 bg-white dark:bg-slate-900 dark:text-white"
                                    />
                                    {errors.jobTitle && (
                                        <p className="text-xs text-red-600">{errors.jobTitle.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label
                                        htmlFor="companyName"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >
                                        Company Name
                                    </Label>
                                    <Input
                                        id="companyName"
                                        {...register('companyName')}
                                        placeholder="e.g., Tech Solutions Inc."
                                        className="focus-visible:ring-2 focus-visible:ring-blue-500 bg-white dark:bg-slate-900 dark:text-white"
                                    />
                                    {errors.companyName && (
                                        <p className="text-xs text-red-600">{errors.companyName.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label
                                        htmlFor="vacancy"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2"
                                    >
                                        <Users className="h-4 w-4" />
                                        Vacancies
                                    </Label>
                                    <Input
                                        id="vacancy"
                                        type="number"
                                        min={1}
                                        {...register('vacancy', { valueAsNumber: true })}
                                        className="focus-visible:ring-2 focus-visible:ring-blue-500 bg-white dark:bg-slate-900 dark:text-white"
                                    />
                                    {errors.vacancy && (
                                        <p className="text-xs text-red-600">{errors.vacancy.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Apply Link, Logo, Views */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="applyLink"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Application Link
                                    </Label>
                                    <Input
                                        id="applyLink"
                                        {...register('applyLink')}
                                        placeholder="https://company.com/apply"
                                        className="focus-visible:ring-2 focus-visible:ring-blue-500 bg-white dark:bg-slate-900 dark:text-white"
                                    />
                                    {errors.applyLink && (
                                        <p className="text-xs text-red-600">{errors.applyLink.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label
                                        htmlFor="image"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2"
                                    >
                                        <Upload className="h-4 w-4" />
                                        Company Logo
                                    </Label>
                                    <Input
                                        id="image"
                                        type="file"
                                        accept="image/*"
                                        {...register('image')}
                                        className="focus-visible:ring-2 focus-visible:ring-blue-500 bg-white dark:bg-slate-900 dark:text-white"
                                    />
                                    {typeof errors.image?.message === 'string' && (
                                        <p className="text-xs text-red-600">{errors.image.message}</p>
                                    )}

                                </div>


                                <div className="space-y-2">
                                    <Label
                                        htmlFor="views"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2"
                                    >
                                        <Clock className="h-4 w-4" />
                                        Initial Views
                                    </Label>
                                    <Input
                                        id="views"
                                        type="number"
                                        min={0}
                                        placeholder="0"
                                        {...register('views', { valueAsNumber: true })}
                                        className="focus-visible:ring-2 focus-visible:ring-orange-500 bg-white dark:bg-slate-900 dark:text-white"
                                    />
                                    {errors.views && (
                                        <p className="text-xs text-red-600">{errors.views.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Dates */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="published"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >
                                        Published Date
                                    </Label>
                                    <Input
                                        id="published"
                                        type="date"
                                        {...register('published')}
                                        className="focus-visible:ring-2 focus-visible:ring-orange-500 bg-white dark:bg-slate-900 dark:text-white"
                                    />
                                    {errors.published && (
                                        <p className="text-xs text-red-600">{errors.published.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label
                                        htmlFor="startApply"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >
                                        Start Apply Date
                                    </Label>
                                    <Input
                                        id="startApply"
                                        type="date"
                                        {...register('startApply')}
                                        className="focus-visible:ring-2 focus-visible:ring-orange-500 bg-white dark:bg-slate-900 dark:text-white"
                                    />
                                    {errors.startApply && (
                                        <p className="text-xs text-red-600">{errors.startApply.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label
                                        htmlFor="deadline"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >
                                        Application Deadline
                                    </Label>
                                    <Input
                                        id="deadline"
                                        type="date"
                                        {...register('deadline')}
                                        className="focus-visible:ring-2 focus-visible:ring-orange-500 bg-white dark:bg-slate-900 dark:text-white"
                                    />
                                    {errors.deadline && (
                                        <p className="text-xs text-red-600">{errors.deadline.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Education */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Educational Requirements
                                </Label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {educationOptions.map((education) => (
                                        <Button
                                            key={education}
                                            type="button"
                                            variant={selectedEducation.includes(education) ? 'default' : 'outline'}
                                            size="sm"
                                            onClick={() => addEducation(education)}
                                            className="text-left py-2 px-3"
                                        >
                                            {education}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {selectedEducation.length > 0 && (
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                        Selected:
                                    </Label>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedEducation.map((education) => (
                                            <Badge
                                                key={education}
                                                variant="secondary"
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                                            >
                                                {education}
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => removeEducation(education)}
                                                    className="ml-1 h-4 w-4 p-0 hover:bg-blue-300 dark:hover:bg-blue-700 rounded-full"
                                                >
                                                    <X className="h-3 w-3" />
                                                </Button>
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {errors.education && (
                                <p className="text-xs text-red-600">{errors.education.message}</p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Markdown Editor */}
                    <Card className="border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden  dark:bg-slate-800">
                        <CardHeader className="">
                            <CardTitle className="text-lg font-semibold">📝 Job Description</CardTitle>
                            <CardDescription className="text-sm mt-1">
                                Write the job details using **markdown** format
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 space-y-3">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium dark:text-gray-200">
                                    Description (Markdown Supported)
                                </Label>
                                <div className="rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden shadow-sm">
                                    <Controller
                                        name="description"
                                        control={control}
                                        render={({ field }) => (
                                            <MDEditor
                                                value={field.value || ''}
                                                onChange={(val) => field.onChange(val || '')}
                                                preview="edit"
                                                height={300}
                                                data-color-mode="light"
                                                className="!bg-white dark:!bg-slate-900"
                                            />
                                        )}
                                    />
                                </div>
                                {errors.description && (
                                    <p className="text-sm text-red-600">{errors.description.message}</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Submit Button */}
                    <div>
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full  bg-blue-400   
                font-semibold py-2 shadow-md  
              cursor-pointer disabled:opacity-60"
                        >
                            {isSubmitting ? '🚀 Creating Job...' : '📢 Create Job'}
                        </Button>
                    </div>
                </form>
  )
}

export default CreateJobForm;