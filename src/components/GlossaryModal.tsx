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
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="bg-[#FFFDF7] border border-stone-300 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FBF7EB]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-semibold text-blue-950 font-sans">
              Từ Điển Thuật Ngữ Kinh Tế & Bán Dẫn
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-stone-200 bg-[#F6EFE0]/50">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm thuật ngữ (ví dụ: CBAM, Friend-shoring, OSAT, DPPA)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-stone-300 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 shadow-2xs"
            />
          </div>
        </div>

        {/* Body content: Left List, Right definition */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          {/* Terms List */}
          <div className="md:col-span-5 border-r border-stone-200 overflow-y-auto max-h-[50vh] md:max-h-none p-3 space-y-1.5 bg-[#FBF7EB]/40">
            {filteredGlossary.map((item) => {
              const isSelected = item.id === activeItem.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedTermId(item.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    isSelected
                      ? 'bg-blue-50 border-blue-400 text-blue-950 font-semibold shadow-2xs'
                      : 'bg-white border-stone-200/70 text-slate-700 hover:bg-stone-50 hover:text-black'
                  }`}
                >
                  <div className={`text-xs ${isSelected ? 'font-bold text-[#1e3a8a]' : 'font-semibold text-slate-800'}`}>{item.term}</div>
                  {item.englishTerm && (
                    <div className="text-[10px] text-slate-500 truncate font-mono mt-0.5">{item.englishTerm}</div>
                  )}
                </button>
              );
            })}
            {filteredGlossary.length === 0 && (
              <div className="p-4 text-center text-xs text-slate-400">
                Không tìm thấy thuật ngữ phù hợp.
              </div>
            )}
          </div>

          {/* Term Definition Detail */}
          <div className="md:col-span-7 p-6 overflow-y-auto bg-white space-y-4">
            <div>
              <div className="text-xs font-mono text-blue-700 uppercase tracking-wider font-semibold">
                {activeItem.englishTerm || 'THUẬT NGỮ CHUYÊN NGÀNH'}
              </div>
              <h3 className="text-2xl font-serif text-[#1e3a8a] font-bold mt-1">
                {activeItem.term}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-[#F6EFE0]/60 border border-stone-200 space-y-2">
              <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Định nghĩa cốt lõi:</div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                {activeItem.definition}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
              <div className="text-[11px] font-mono text-blue-800 uppercase font-semibold">Ý nghĩa đối với kinh tế Việt Nam:</div>
              <p className="text-xs sm:text-sm text-blue-950 leading-relaxed font-sans">
                {activeItem.economicContext}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 flex justify-end bg-[#FBF7EB]">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1e3a8a] hover:bg-blue-800 text-white text-xs font-semibold rounded transition-colors shadow-xs"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
};
