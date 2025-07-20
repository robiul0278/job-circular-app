import React from 'react'
import { Button } from './ui/button'
import { Send } from 'lucide-react'

const Telegram = () => {
    return (
        <div className="rounded-lg p-4 border dark:bg-gray-900">
            <h3 className="font-semibold mb-3 text-sm uppercase">Follow Us</h3>
            <a href="https://t.me/diplomajobsbd" target="_blank" rel="noopener noreferrer">
                <Button className="flex w-full items-center space-x-2 bg-green-700 hover:bg-green-600 text-white hover:text-white font-medium px-4 py-2 rounded cursor-pointer">
                    <Send size={16} />
                    <span>Telegram</span>
                </Button>
            </a>
        </div>
    )
}

export default Telegram;