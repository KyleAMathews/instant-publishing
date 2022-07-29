import Typography from "typography"
import theme from "typography-theme-fairy-gates"

const typography = new Typography({ ...theme, blockMarginBottom: 0.5 })

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
