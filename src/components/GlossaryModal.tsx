import React, { useState } from 'react';
import { X, Search, BookOpen, ExternalLink } from 'lucide-react';
import { GLOSSARY } from '../data/storyData';

interface GlossaryModalProps {
  isOpen: boolean;
  initialTermId?: string;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, initialTermId, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTermId, setSelectedTermId] = useState<string>(initialTermId || GLOSSARY[0].id);

  if (!isOpen) return null;

  const filteredGlossary = GLOSSARY.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.englishTerm && item.englishTerm.toLowerCase().includes(searchTerm.toLowerCase())) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeItem = GLOSSARY.find(item => item.id === selectedTermId) || GLOSSARY[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="bg-[#111319] border border-stone-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-stone-100 font-sans">
              Từ Điển Thuật Ngữ Kinh Tế & Bán Dẫn
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-stone-800/80 bg-stone-900/50">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm thuật ngữ (ví dụ: CBAM, Friend-shoring, OSAT, DPPA)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-stone-950 border border-stone-800 rounded-lg pl-9 pr-4 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Body content: Left List, Right definition */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          {/* Terms List */}
          <div className="md:col-span-5 border-r border-stone-800 overflow-y-auto max-h-[50vh] md:max-h-none p-3 space-y-1.5">
            {filteredGlossary.map((item) => {
              const isSelected = item.id === activeItem.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedTermId(item.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    isSelected
                      ? 'bg-amber-950/20 border-amber-600/50 text-amber-200'
                      : 'bg-stone-900/40 border-transparent text-stone-400 hover:bg-stone-800/60 hover:text-stone-200'
                  }`}
                >
                  <div className="text-xs font-semibold text-stone-200">{item.term}</div>
                  {item.englishTerm && (
                    <div className="text-[10px] text-stone-500 truncate font-mono mt-0.5">{item.englishTerm}</div>
                  )}
                </button>
              );
            })}
            {filteredGlossary.length === 0 && (
              <div className="p-4 text-center text-xs text-stone-500">
                Không tìm thấy thuật ngữ phù hợp.
              </div>
            )}
          </div>

          {/* Term Definition Detail */}
          <div className="md:col-span-7 p-6 overflow-y-auto bg-stone-950/40 space-y-4">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                {activeItem.englishTerm || 'THUẬT NGỮ CHUYÊN NGÀNH'}
              </div>
              <h3 className="text-2xl font-serif text-stone-100 font-medium mt-1">
                {activeItem.term}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
              <div className="text-[11px] font-mono text-stone-400 uppercase">Định nghĩa cốt lõi:</div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
                {activeItem.definition}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/15 border border-amber-900/30 space-y-2">
              <div className="text-[11px] font-mono text-amber-400 uppercase">Ý nghĩa đối với kinh tế Việt Nam:</div>
              <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed font-sans">
                {activeItem.economicContext}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-800 flex justify-end bg-stone-950">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded transition-colors"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
};
