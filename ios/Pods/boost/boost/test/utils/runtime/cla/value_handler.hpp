//  (C) Copyright Gennadiy Rozental 2005-2014.
//  Use, modification, and distribution are subject to the
//  Boost Software License, Version 1.0. (See accompanying file
//  LICENSE_1_0.txt or copy at http://www.boost.org/LICENSE_1_0.txt)

//  See http://www.boost.org/libs/test for the library home page.
//
//  File        : $RCSfile$
//
//  Version     : $Revision$
//
//  Description : specific value handlers
// ***************************************************************************

#ifndef BOOST_TEST_UTILS_RUNTIME_CLA_VALUE_HANDLER_HPP
#define BOOST_TEST_UTILS_RUNTIME_CLA_VALUE_HANDLER_HPP

// Boost.Runtime.Parameter
#include <boost/test/utils/runtime/config.hpp>

#include <boost/test/utils/runtime/cla/fwd.hpp>

namespace boost {

namespace BOOST_TEST_UTILS_RUNTIME_PARAM_NAMESPACE {

namespace cla {

namespace rt_cla_detail {

// ************************************************************************** //
// **************            runtime::cla::assigner            ************** //
// ************************************************************************** //

template<typename T>
class assigner {
public:
    // Constructor
    explicit    assigner( T& loc ) : m_target( loc )    {}

    // value handler implementation
    void        operator()( parameter const&, T& t )  { m_target = t; }

private:
    // Data members
    T&          m_target;
};

} // namespace rt_cla_detail

} // namespace cla

} // namespace BOOST_TEST_UTILS_RUNTIME_PARAM_NAMESPACE

} // namespace boost

#endif // BOOST_TEST_UTILS_RUNTIME_CLA_VALUE_HANDLER_HPP
