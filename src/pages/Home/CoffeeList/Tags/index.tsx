import { TagsContainer } from './styles';

interface TagsProps {
  tags: string[];
}

export function Tags({ tags }: TagsProps) {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </TagsContainer>
  );
}
