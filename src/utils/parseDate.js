/**
 * @param {string} text
 */
export default (text) => {
    if (typeof (text) == 'string') {
        return {
            year: text.substr(0, 4),
            month: text.substr(5, 2),
            date: text.substr(8, 2),
        }
    } else {
        return {
            year: String(),
            month: String(),
            date: String()
        }
    }
}