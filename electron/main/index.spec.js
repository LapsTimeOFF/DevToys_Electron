const {
    _electron: electron
} = require('playwright')
const {
    test
} = require('@playwright/test')

test('launch app', async () => {
    const electronApp = await electron.launch({
        args: ['dist-electron/main/index.js']
    })
    // close app
    await electronApp.close()
})

test('get isPackaged', async () => {
    const electronApp = await electron.launch({
        args: ['dist-electron/main/index.js']
    })
    const isPackaged = await electronApp.evaluate(async ({
        app
    }) => {
        // This runs in Electron's main process, parameter here is always
        // the result of the require('electron') in the main app script.
        return app.isPackaged
    })
    console.log(isPackaged) // false (because we're in development mode)
    // close app
    await electronApp.close()
})