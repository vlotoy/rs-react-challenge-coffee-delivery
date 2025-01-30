import { TagsContainer } from './styles';

export function Tags({ tags }) {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <span>{tag}</span>
      ))}
    </TagsContainer>
  );
}
