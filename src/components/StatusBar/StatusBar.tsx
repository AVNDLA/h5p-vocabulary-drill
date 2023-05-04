import React, { FC } from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar';

type StatusBarProps = {
  page: number;
  totalPages: number;
  score: number | null;
  totalScore: number | null;
  showNextButton: boolean;
  disableNextButton: boolean;
  onNext: () => void;
  onShowResults: () => void;
};

export const StatusBar: FC<StatusBarProps> = ({
  page,
  totalPages,
  score,
  totalScore,
  showNextButton,
  disableNextButton,
  onNext,
  onShowResults,
}) => {
  // TODO: Translate "Next", "Finish", "Score" and "Page"
  const scorePage = page === totalPages;
  return (
    <>
      <ProgressBar page={page} totalPages={totalPages} />
      <div className="h5p-vocabulary-drill-status">
        {score != null && !scorePage ? (
          <div className="h5p-vocabulary-drill-status-score">
            <span aria-hidden="true">Score: </span>
            <span className="h5p-vocabulary-drill-status-number" aria-hidden="true">{score}</span>
            <span className="h5p-vocabulary-drill-status-divider" aria-hidden="true"> / </span>
            <span className="h5p-vocabulary-drill-status-number" aria-hidden="true">{totalScore}</span>
            <p className="visually-hidden">Score: You got {score} out of {totalScore} points</p>
          </div>
        ) : null}
        <div className="h5p-vocabulary-drill-status-pages">
          <span className="h5p-vocabulary-drill-status-number" aria-hidden="true">{page}</span>
          <span className="h5p-vocabulary-drill-status-divider" aria-hidden="true"> / </span>
          <span className="h5p-vocabulary-drill-status-number" aria-hidden="true">{totalPages}</span>
          <p className="visually-hidden">Page {page} of {totalPages}</p>
        </div>
        {showNextButton ?
          <button
            type="button"
            className="h5p-vocabulary-drill-next"
            onClick={onNext}
            disabled={disableNextButton}
          >
            Next
          </button>
          : null}
        {!showNextButton && !scorePage ?
          <button
            type="button"
            className="h5p-vocabulary-drill-next"
            onClick={onShowResults}
            disabled={disableNextButton}
          >
            Finish
          </button>
          : null}
      </div>
    </>
  );
};