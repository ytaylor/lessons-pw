import ListItem from './ListItem';

const List = ({ women }) => (
    <div>
        {women.map((w) => <ListItem key={w.id} woman={w} />)}
    </div>
);
export default List;
