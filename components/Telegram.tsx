import { Button } from './ui/button'
import { Send } from 'lucide-react'

const Telegram = async () => {
    return (
        <div className="rounded-lg p-4 border dark:bg-gray-900">
            <h3 className="font-semibold mb-3 text-sm uppercase">Follow Us</h3>
            <Button asChild className="flex w-full items-center space-x-2 bg-green-800 hover:bg-green-800 text-white hover:text-white font-medium px-4 py-2 rounded cursor-pointer">
                <a href="https://t.me/diplomajobsbd" target="_blank" rel="noopener noreferrer">
                    <Send size={16} />
                    <span>Telegram</span>
                </a>
            </Button>

        </div>
    )
}

export default Telegram;