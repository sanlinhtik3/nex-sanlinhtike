// components/CopyButton.tsx
import { Button } from '@/components/ui/button';
import { Check, Copy, CopyCheck } from 'lucide-react';
import { useState } from 'react';

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    setTimeout(() => {
        setIsCopied(false);
    }, 3000);

    return (
        <div>
            <Button onClick={copyToClipboard} type="submit" variant="outline" size="icon" className="px-3">
                {isCopied ? (<Check className="h-4 w-4" />) : <Copy className="h-4 w-4" />}
            </Button>
        </div>
    );
};

export default CopyButton;