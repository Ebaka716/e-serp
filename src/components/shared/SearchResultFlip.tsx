import React, { useState } from 'react';
import type { SearchResultProps } from './SearchResult';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { MdOutlineThumbUp, MdOutlineThumbDown } from 'react-icons/md';

interface SearchResultFlipProps extends SearchResultProps {
  devMode?: boolean;
  altView?: boolean;
}

export default function SearchResultFlip({
  id,
  title,
  assetType,
  snippet,
  className = '',
  devMode = false,
  altView = false
}: SearchResultFlipProps) {
  const [trunc, setTrunc] = useState(false);
  const [quotes, setQuotes] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [showThumbs, setShowThumbs] = useState(false);

  // Helper to render snippet with toggles
  let displaySnippet = snippet;
  if (trunc) {
    displaySnippet = snippet.split(' ').slice(0, 12).join(' ') + (snippet.split(' ').length > 12 ? '...' : '');
  }
  if (highlight) {
    const words = displaySnippet.split(' ');
    displaySnippet = words.map((word, i) => i < 5 ? `<mark>${word}</mark>` : word).join(' ');
  }
  if (quotes) {
    displaySnippet = `"${displaySnippet}"`;
  }

  // Render snippet as HTML if highlight is on
  const snippetNode = highlight ? (
    <span dangerouslySetInnerHTML={{ __html: displaySnippet }} />
  ) : (
    <span>{displaySnippet}</span>
  );

  // Menu button (three dots)
  const menuButton = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-1 rounded hover:bg-gray-200" aria-label="Options">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><circle cx="4" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="16" cy="10" r="2"/></svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuCheckboxItem checked={trunc} onCheckedChange={setTrunc}>Truncate snippet</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={quotes} onCheckedChange={setQuotes}>Add quotes</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={highlight} onCheckedChange={setHighlight}>Highlight first 5 words</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showThumbs} onCheckedChange={setShowThumbs}>Show thumbs up/down</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  if (devMode) {
    return (
      <div key={id} className={`border-b border-gray-200 pb-4 relative ${className}`}>
        <div className="flex flex-col gap-1">
          <div>
            <span className="font-mono text-xs text-gray-500 mr-1">snippet:</span>
            <span className={`${altView ? 'text-3xl' : 'text-gray-600'} mb-1`}>{snippetNode}</span>
          </div>
          {showThumbs && (
            <div className="flex flex-row items-center gap-2 mt-1 mb-1 pt-1 pb-1">
              <MdOutlineThumbUp size={22} />
              <MdOutlineThumbDown size={22} />
            </div>
          )}
          <div>
            <span className="font-mono text-xs text-gray-500 mr-1">title:</span>
            <span className="text-lg font-medium text-blue-600 hover:underline cursor-pointer mb-1">{title}</span>
          </div>
          <div>
            <span className="font-mono text-xs text-gray-500 mr-1">assetType:</span>
            <span className="text-sm text-green-700">{assetType}</span>
          </div>
          {/* Menu button below the asset type label */}
          <div className="mt-2">{menuButton}</div>
        </div>
      </div>
    );
  }
  return (
    <div key={id} className={`border-b border-gray-200 pb-4 relative ${className}`}>
      <p className={`${altView ? 'text-3xl' : 'text-gray-600'} mb-1`}>{snippetNode}</p>
      {showThumbs && (
        <div className="flex flex-row items-center gap-2 mt-1 mb-1 pt-1 pb-1">
          <MdOutlineThumbUp size={22} />
          <MdOutlineThumbDown size={22} />
        </div>
      )}
      <h3 className="text-lg font-medium text-blue-600 hover:underline cursor-pointer mb-1">
        {title}
      </h3>
      <p className="text-sm text-green-700">{assetType}</p>
      {/* Menu button below the asset type label */}
      <div className="mt-2">{menuButton}</div>
    </div>
  );
} 