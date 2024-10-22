// schools/kemurnian-1/page.tsx
import { ReactElement } from 'react';
import AdminLayout from '../../layout'; // Adjust path as needed

const Kemurnian1Page = () => {
  return <h1>Kemurnian 1 Content</h1>;
};

Kemurnian1Page.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Kemurnian1Page;
