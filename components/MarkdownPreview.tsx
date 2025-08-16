
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

export default async function MarkdownPreview({ description, className = '' }: MarkdownPreviewProps) {
  function getImageSrc(src: string | Blob | undefined): string {
    if (!src) return '';
    return typeof src === 'string' ? src : URL.createObjectURL(src);
  }

  const components: Components = {
    code({
      children,
      ...props
    }: {
      inline?: boolean;
      className?: string;
      children?: React.ReactNode;
    } & HTMLAttributes<HTMLElement>) {

      return (
        <code
          className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-gray-900 dark:text-gray-100"
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
          className="rounded-lg shadow-md max-w-full h-auto my-4"
        />
      );
    },

    h1({ children }) {
      return <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4 first:mt-0">{children}</h1>;
    },
    h2({ children }) {
      return (
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          {children}
        </h2>
      );
    },
    h3({ children }) {
      return <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">{children}</h3>;
    },
    h4({ children }) {
      return <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">{children}</h4>;
    },
    h5({ children }) {
      return <h5 className="text-base font-semibold text-gray-900 dark:text-white mt-4 mb-2">{children}</h5>;
    },
    h6({ children }) {
      return <h6 className="text-sm font-semibold text-gray-900 dark:text-white mt-4 mb-2">{children}</h6>;
    },
    p({ children }) {
      return <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{children}</p>;
    },
    ul({ children }) {
      return <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-4 list-disc list-inside">{children}</ul>;
    },
    ol({ children }) {
      return <ol className="text-gray-700 dark:text-gray-300 space-y-2 mb-4 list-decimal list-inside">{children}</ol>;
    },
    li({ children }) {
      return <li className="text-gray-700 dark:text-gray-300">{children}</li>;
    },
    blockquote({ children }) {
      return (
        <blockquote className="border-l-4 border-green-800 pl-4 p-2 bg-gray-50 dark:bg-gray-800 rounded-r-lg">
          <div className="text-sm text-gray-700 dark:text-gray-300 italic">{children}</div>
        </blockquote>
      );
    },
    a({ href, children }) {
      return (
        <a
          href={href ?? ''}
          className="text-green-800 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 underline decoration-green-300 hover:decoration-green-800 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    strong({ children }) {
      return <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>;
    },
    em({ children }) {
      return <em className="italic text-gray-700 dark:text-gray-300">{children}</em>;
    },
    hr() {
      return <hr className="my-4 border-gray-300 dark:border-gray-700" />;
    },
    table({ children }) {
      return (
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg">
            {children}
          </table>
        </div>
      );
    },
    thead({ children }) {
      return <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>;
    },
    tbody({ children }) {
      return (
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {children}
        </tbody>
      );
    },
    th({ children }) {
      return (
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {children}
        </th>
      );
    },
    td({ children }) {
      return <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{children}</td>;
    },
  };

  return (
    <div className={`prose prose-lg dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {description}
      </ReactMarkdown>
    </div>
  );
}
