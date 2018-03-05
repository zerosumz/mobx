import { globalState, isolateGlobalState } from "../core/globalstate"

export function configure(options: {
    enforceActions?: boolean
    computedRequiresReaction?: boolean
    isolateGlobalState?: boolean
    disableErrorBoundaries?: boolean
}): void {
    if (options.enforceActions !== undefined) {
        globalState.enforceActions = !!options.enforceActions
        globalState.allowStateChanges = !options.enforceActions
    }
    if (options.computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!options.computedRequiresReaction
    }
    if (options.isolateGlobalState === true) {
        isolateGlobalState()
    }
    if (options.disableErrorBoundaries !== undefined) {
        if (options.disableErrorBoundaries === true)
            console.warn(
                "WARNING: Debug feature only. MobX will NOT recover from errors if this is on."
            )
        globalState.disableErrorBoundaries = !!options.disableErrorBoundaries
    }
}