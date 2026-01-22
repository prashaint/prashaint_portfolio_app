import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X } from 'lucide-react';

const TerminalWindow = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['Welcome to Prashaint\'s Terminal! Type "help" for commands.']);
  const [isOpen, setIsOpen] = useState(false);
  const outputRef = useRef(null);

  const commands = {
    help: 'Available commands: whoami, skills, experience, contact, clear',
    whoami: 'Prashaint Mishra - Senior Data Engineer with 13+ years of experience in ML-driven data pipelines',
    skills: 'Core Skills: PySpark | Python | Airflow | AWS | Databricks | SQL | Docker | ML Pipelines',
    experience: 'Current: AVP at Barclays | Previous: Citi, Cognizant, Infosys (13+ years total)',
    contact: 'Email: prashaint.kumar.mishra@gmail.com | LinkedIn: linkedin.com/in/prashaint',
    clear: 'CLEAR'
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    if (cmd === 'clear') {
      setOutput(['Welcome to Prashaint\'s Terminal! Type "help" for commands.']);
    } else if (commands[cmd]) {
      setOutput([...output, `> ${input}`, commands[cmd]]);
    } else if (cmd) {
      setOutput([...output, `> ${input}`, `Command not found: ${cmd}. Type "help" for available commands.`]);
    }
    
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 z-[80] p-3 sm:p-4 rounded-full bg-green-600 text-white shadow-lg hover:scale-110 transition-transform active:scale-95"
        aria-label="Toggle terminal"
      >
        <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-x-4 sm:right-4 sm:left-auto bottom-32 z-[85] sm:w-96 bg-gray-900 rounded-lg shadow-2xl overflow-hidden animate-slide-in-from-bottom">
          <div className="bg-gray-800 px-3 sm:px-4 py-2 flex items-center justify-between">
            <span className="text-green-400 text-xs sm:text-sm font-mono">prashaint@terminal:~$</span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-white p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div 
            ref={outputRef}
            className="h-48 sm:h-64 overflow-y-auto p-3 sm:p-4 font-mono text-xs sm:text-sm"
          >
            {output.map((line, i) => (
              <div 
                key={i} 
                className={`${line.startsWith('>') ? 'text-green-400' : 'text-gray-300'} mb-1 break-words`}
              >
                {line}
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-700 p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCommand(e)}
              placeholder="Type command..."
              className="w-full bg-transparent text-green-400 font-mono text-xs sm:text-sm outline-none placeholder-gray-600"
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalWindow;