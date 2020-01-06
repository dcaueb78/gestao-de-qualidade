/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import CreateCorrectiveActions from '~/pages/CreateCorrectiveActions';

describe('Create corrective actions ', () => {
  it('should be able to add new corrective action', () => {
    const { getByTestId } = render(
      <CreateCorrectiveActions match={{ params: { id: 6 } }} />
    );

    const fieldNone = await waitForElement(

    )

    fireEvent.change(getByLabelText('what_to_do'), {
      target: { value: 'Testando' }
    });
  });
});
