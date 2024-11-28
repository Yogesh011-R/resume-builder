'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ResumeFormValues } from '@/form-schemas';

import { cn } from '@/lib/utils';

import Breadcrumbs from './breadcrumb';
import { ResumeEditorFooter } from './footer';
import { steps } from './steps';

export const ResumeEditor = () => {
  const searchParams = useSearchParams();

  const [resumeData, setResumeData] = useState<ResumeFormValues>({});

  const [showSmResumePreview, setShowSmResumePreview] = useState(false);

  // const { isSaving, hasUnsavedChanges } = useAutoSaveResume(resumeData);

  // useUnloadWarning(hasUnsavedChanges);

  const currentStep = searchParams.get('step') || steps[0].key;

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('step', key);
    window.history.pushState(null, '', `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep
  )?.component;
  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
      </header>
      <main className="relative h-full grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div
            className={cn(
              'w-full space-y-6 overflow-y-auto p-3 md:block md:w-1/2',
              showSmResumePreview && 'hidden'
            )}
          >
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>
          <div className="grow md:border-l">
            <pre>{JSON.stringify(resumeData, null, 2)}</pre>
          </div>
          {/* <ResumePreviewSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            className={cn(showSmResumePreview && "flex")}
          /> */}
        </div>
      </main>
      <ResumeEditorFooter
        currentStep={currentStep}
        setCurrentStep={setStep}
        showSmResumePreview={showSmResumePreview}
        setShowSmResumePreview={setShowSmResumePreview}
        isSaving={false}
      />
    </div>
  );
};