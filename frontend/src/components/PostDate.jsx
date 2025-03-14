import { format } from 'date-fns';

const PostDate = ({ createdAt }) => {
  const formattedDate = format(new Date(createdAt), "dd MMM ''yy");

  return <span>{formattedDate}</span>;
};

export default PostDate;
