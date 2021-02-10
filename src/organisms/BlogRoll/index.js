export const tagInfo = (tags, minutes) => {
    if (tags.length > 0) {
        const helperTagIndex = tags.reduce((_, actual, index) => {
            return actual.visibility === 'internal' ? index : -1
        });
        const tagName = helperTagIndex !== -1 && tags[helperTagIndex] ?
            tags[helperTagIndex].name.split("#")[1] : 'Sales and marketing';
        const tagSlug = helperTagIndex !== -1 && tags[helperTagIndex] ?
            tags[helperTagIndex].slug : 'sales-and-marketing';
        return {
            slug: tagSlug,
            name: tagName,
            reading_time: minutes,
        };
    } else {
        return {
            slug: '#',
            name: 'Loading...',
            reading_time: minutes,
        };
    }
}

export const postType = tags => {
    if (tags.length > 0) {
        const type = tags.reduce((last) => {
            return last.visibility === 'public' ? last.slug : 'blog'
        });
        return type;
    } else {
        return 'blog';
    }
}