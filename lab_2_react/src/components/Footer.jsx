import { useEffect, useState } from 'react';

function getSystemInfo() {
  return {
    browser: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
  };
}

function Footer() {
  const [systemInfo] = useState(getSystemInfo);

  useEffect(() => {
    localStorage.setItem('reactSystemInfo', JSON.stringify(systemInfo));
  }, [systemInfo]);

  return (
    <footer className="text-center text-slate-500 text-sm py-6">
      <p>2026 © My Student CV | Deployed with Vercel</p>
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-md">
        <h2 className="mb-3 text-lg font-semibold text-slate-800">
          System Info
        </h2>
        <div className="space-y-2 break-words text-slate-700">
          <p>
            <span className="font-semibold text-slate-900">Browser:</span>{' '}
            {systemInfo.browser}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Platform:</span>{' '}
            {systemInfo.platform}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Language:</span>{' '}
            {systemInfo.language}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
