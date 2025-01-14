// src/components/LimitedTextField.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import LimitedTextField from './LimitedTextField';

describe('LimitedTextField コンポーネント', () => {
  const mockOnChange = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('正しいラベルでレンダリングされること', () => {
    render(<LimitedTextField label="テストラベル" value="" onChange={mockOnChange} maxLength={10} />);
    expect(screen.getByLabelText('テストラベル')).toBeInTheDocument();
  });

  it('正しい文字数が表示されること', () => {
    render(<LimitedTextField label="テスト" value="こんにちは" onChange={mockOnChange} maxLength={10} />);
    expect(screen.getByText('5/10')).toBeInTheDocument();
  });

  it('最大文字数を超えた場合にエラー色に変わること', () => {
    render(<LimitedTextField label="テスト" value="これは長すぎるテキストです" onChange={mockOnChange} maxLength={10} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar.getAttribute('aria-valuenow')).toBe('100');
    expect(screen.getByText('13/10')).toHaveStyle('color: rgb(211, 47, 47)'); // MUI エラー色
  });

  it('入力変更時に onChange 関数が呼び出されること', () => {
    render(<LimitedTextField label="テスト" value="" onChange={mockOnChange} maxLength={10} />);
    const input = screen.getByLabelText('テスト');
    fireEvent.change(input, { target: { value: '新しい値' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('LinearProgress が正しい値でレンダリングされること', () => {
    render(<LimitedTextField label="テスト" value="12345" onChange={mockOnChange} maxLength={10} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar.getAttribute('aria-valuenow')).toBe('50');
  });

  it('最大文字数を超えていない場合にプライマリカラーが維持されること', () => {
    render(<LimitedTextField label="テスト" value="12345" onChange={mockOnChange} maxLength={10} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('MuiLinearProgress-colorPrimary');
    expect(screen.getByText('5/10')).toHaveStyle('color: rgb(25, 118, 210)'); // MUI プライマリ色
  });
});
