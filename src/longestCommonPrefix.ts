export function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return '';
    }

    let prefix = strs[0]; // 从第一个字符串开始作为初始前缀
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // 如果当前字符串不包含前缀，则移除前缀的一个字符
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') {
                // 如果前缀为空，则所有字符串没有公共前缀
                return '';
            }
        }
    }

    return prefix;
}