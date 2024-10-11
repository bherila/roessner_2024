export interface Section {
    name: string;
    images: string[];
}

function rangeStrings(x: number, y: number): string[] {
    const result: string[] = [];
    for (let i = x; i <= y; i++) {
        result.push(i.toString().padStart(2, '0'));
    }
    return result;
}

export const sections: Section[] = [
    {name: 'Publications', images: rangeStrings(0, 9).map((num) => `publications-${num}.webp`)},
    {name: 'Branding', images: rangeStrings(0, 9).map((num) => `branding-${num}.webp`)},
    {name: 'Marketing', images: rangeStrings(0, 13).map((num) => `marketing-${num}.webp`)},
    {name: 'Events', images: rangeStrings(0, 5).map((num) => `events-${num}.webp`)}
    // Add more sections as needed
];

export const allItems = sections.flatMap((section, sectionIndex) =>
    section.images.map((imageURI, imageIndex) => {
        return {
            key: `${sectionIndex}.${imageIndex}`,
            section: section.name,
            imageURI
        }
    }))

export function indexOfSectionStart(sectionName: string) {
    return allItems.findIndex(r => r.section === sectionName) ?? 0;
}
