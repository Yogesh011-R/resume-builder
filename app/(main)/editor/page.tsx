import { Suspense } from 'react';
import { Metadata } from 'next';

import { ResumeEditor } from './_components/resume-editor';

export const metadata: Metadata = {
  title: 'Design your resume',
};

const EditorPage = ({}) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ResumeEditor />
    </Suspense>
  );
};

export default EditorPage;
