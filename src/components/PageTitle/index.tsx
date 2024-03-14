import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = 'VdnGpt';
  }, [title]);

  return null;
});

export default PageTitle;
