import Header from '@/components/header/header';
import { cn } from '@/lib/utils';

const DashboardLayout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='max-w-6xl mx-auto my-6'>{props.children}</main>
    </div>
  );
};

export default DashboardLayout;
