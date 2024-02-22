import Input from '@/src/components/input/input';

export default function Test() {
  return (
    <div style={{ display: 'flex', gap: '10px', padding: '100px' }}>
      <Input type="email" />
      <Input type="password" />
    </div>
  );
}
