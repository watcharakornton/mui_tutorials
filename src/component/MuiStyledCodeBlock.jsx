import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vsDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const MuiStyledCodeBlock = ({ code = '', language = 'json' }) => {

    return (
        <div style={{ position: 'relative', fontFamily: 'Fira Code, monospace' }}>
            {/* Code Block */}
            <SyntaxHighlighter
                language={language}
                style={vsDark}
                showLineNumbers={false}
                wrapLongLines={true}
                customStyle={{
                    fontFamily: 'Fira Code, monospace',
                    fontSize: '0.875rem',
                    borderRadius: '8px',
                    padding: '16px',
                    backgroundColor: '#1e1e1e',
                    margin: 0,
                }}
            >
                {code.trim()}
            </SyntaxHighlighter>
        </div>
    );
};

export default MuiStyledCodeBlock;
