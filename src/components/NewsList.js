import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchResults from '../redux/news/FetchResults';
import { fetchResult } from '../redux/news/resultReducer';
import './NewsBody.css';

const NewsList = () => {
  const results = useSelector((state) => state.results);
  const dispatch = useDispatch();
  const { name } = useParams();

  const selectedCountry = results.find((country) => country.country === name);
  useEffect(() => {
    if (selectedCountry.length === 0) {
      fetchResults().then((res) => dispatch(fetchResult(res)));
    }
  });
  return (
    <>
      <div className="container-fluid">
        <div className="continent">
          <h1 className="selected-name">{name}</h1>
          <img
            src={selectedCountry.country_flag}
            alt="national-flag"
            className="national-flag1"
          />
        </div>
        <div>
          <ul className="today">
            <h3> Today&apos;s update:</h3>
            <li>
              <h4>New cases:</h4>
              {' '}
              {selectedCountry.todays_cases.toLocaleString()}
            </li>
            <li>
              <h4>Confirmed deaths:</h4>
              {' '}
              {selectedCountry.todays_deaths.toLocaleString()}
            </li>
            <li>
              <h4>New Recoveries:</h4>
              {' '}
              {selectedCountry.todays_recovered.toLocaleString()}
            </li>
          </ul>
          <ul className="total">
            <h3>Total:</h3>
            <li>
              <h4>Confirmed cases:</h4>
              {' '}
              {selectedCountry.total_cases.toLocaleString()}
            </li>
            <li>
              <h4>Recovered:</h4>
              {' '}
              {selectedCountry.total_recovered.toLocaleString()}
            </li>
            <li>
              <h4>Active Cases:</h4>
              {' '}
              {selectedCountry.total_active.toLocaleString()}
            </li>
            <li>
              <h4>Total Tests:</h4>
              {' '}
              {selectedCountry.total_tests.toLocaleString()}
            </li>
            <li>
              <h4>Deaths:</h4>
              {' '}
              {selectedCountry.total_deaths.toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NewsList;
