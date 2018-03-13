cmake_minimum_required(VERSION 2.6)

project(TEO_DEVELOPER_MANUAL)

find_package(YARP REQUIRED)
list(APPEND CMAKE_MODULE_PATH ${YARP_MODULE_PATH})
include(YarpInstallationHelpers)
yarp_configure_external_installation(teo-developer-manual)

file(GLOB md ${CMAKE_SOURCE_DIR}/*.md)
set(assets ${CMAKE_SOURCE_DIR}/assets)

yarp_install(FILES ${md} DESTINATION ${TEO-DEVELOPER-MANUAL_CONTEXTS_INSTALL_DIR})
yarp_install(DIRECTORY ${assets} DESTINATION ${TEO-DEVELOPER-MANUAL_CONTEXTS_INSTALL_DIR})

include(GNUInstallDirs)

if(WIN32 AND NOT CYGWIN)
    set(_cmake_destination CMake)
else()
    set(_cmake_destination ${CMAKE_INSTALL_LIBDIR}/cmake/TEO_DEVELOPER_MANUAL)
endif()

export(PACKAGE TEO_DEVELOPER_MANUAL)

file(WRITE ${CMAKE_BINARY_DIR}/TEO_DEVELOPER_MANUALConfig.cmake "# Dummy CMake configuration export file.")
install(FILES ${CMAKE_BINARY_DIR}/TEO_DEVELOPER_MANUALConfig.cmake DESTINATION ${_cmake_destination})

include(AddUninstallTarget)
