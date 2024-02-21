import CommonSearchBar, {
  TSearchBarProps,
} from '@components/ui/molecules/bar/search-bar/common-search-bar/CommonSearchBar';

const LinkSearchBar = ({ input, onChange, clearInput }: TSearchBarProps) => {
  return <CommonSearchBar input={input} onChange={onChange} clearInput={clearInput} />;
};

export default LinkSearchBar;
