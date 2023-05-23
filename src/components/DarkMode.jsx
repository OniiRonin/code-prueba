import { useState } from 'react'
import { Switch } from '@headlessui/react'

const DarkMode = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="flex items-center justify-end mt-4">
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'
                    } relative inline-flex h-7 w-14 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-7' : 'translate-x-0'
                        } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
            <span className="text-sm text-gray-300 ml-2">Dark Mode</span>
        </div>
    )
}

export default DarkMode