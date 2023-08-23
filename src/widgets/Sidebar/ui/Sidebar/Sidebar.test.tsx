import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('appears in the document', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('appears in the document', () => {
    renderWithTranslation(<Sidebar />);

    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
