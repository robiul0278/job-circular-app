import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import type { Components } from 'react-markdown';
import type { HTMLAttributes } from 'react';

interface MarkdownPreviewProps {
  description: string;
  className?: string;
}

export default function MarkdownPreview({ description, className = '' }: MarkdownPreviewProps) {
  function getImageSrc(src: string | Blob | undefined): string {
    if (!src) return '';
    return typeof src === 'string' ? src : URL.createObjectURL(src);
  }

  const components: Components = {
    code({ children, ...props }) {
      return (
        <code
          className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono text-gray-900 dark:text-gray-100"
          {...props}
        >
          {children}
        </code>
      );
    },

    img({ src, alt }) {
      const safeSrc = getImageSrc(src);
      return (
        <Image
          width={1200}
          height={700}
          src={safeSrc}
          alt={alt ?? ''}
          className="rounded-lg shadow-md w-full h-auto object-contain my-4"
        />
      );
    },

    h1({ children }) {
      return <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3">{children}</h1>;
    },
    h2({ children }) {
      return (
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
          {children}
        </h2>
      );
    },
    h3({ children }) {
      return <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">{children}</h3>;
    },
    p({ children }) {
      return <p className="text-gray-700 dark:text-gray-300 leading-relaxed sm:leading-loose mt-3">{children}</p>;
    },
    ul({ children }) {
      return <ul className="text-gray-700 dark:text-gray-300 space-y-1 sm:space-y-2 mb-4 list-disc list-inside ml-4 sm:ml-6">{children}</ul>;
    },
    ol({ children }) {
      return <ol className="text-gray-700 dark:text-gray-300 space-y-1 sm:space-y-2 mb-4 list-decimal list-inside ml-4 sm:ml-6">{children}</ol>;
    },
    li({ children }) {
      return <li className="text-gray-700 dark:text-gray-300">{children}</li>;
    },
    blockquote({ children }) {
      return (
        <blockquote className="border-l-4 border-green-700 pl-3 sm:pl-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-r-lg my-4">
          <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 italic">{children}</div>
        </blockquote>
      );
    },
    a({ href, children }) {
      return (
        <a
          href={href ?? ''}
          className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 underline underline-offset-2 decoration-green-300 hover:decoration-green-600 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    table({ children }) {
      return (
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg text-sm sm:text-base">
            {children}
          </table>
        </div>
      );
    },
    th({ children }) {
      return (
        <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
          {children}
        </th>
      );
    },
    td({ children }) {
      return <td className="px-4 sm:px-6 py-2 sm:py-3 whitespace-normal text-sm text-gray-700 dark:text-gray-300">{children}</td>;
    },
  };

  return (
    <div className={`prose prose-base sm:prose-lg dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {description}
      </ReactMarkdown>
    </div>
  );
}
