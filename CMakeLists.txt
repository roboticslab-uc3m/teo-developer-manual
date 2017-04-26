# Bare cmake

cmake_minimum_required(VERSION 2.6)

set(KEYWORD "best-practices")

# Start a project.
project(${KEYWORD})

find_package(YARP REQUIRED)
list(APPEND CMAKE_MODULE_PATH ${YARP_MODULE_PATH})
include(YarpInstallationHelpers)
yarp_configure_external_installation(teo-software-manual)

file(GLOB md ${CMAKE_CURRENT_SOURCE_DIR}/*.md)
set(assets ${CMAKE_CURRENT_SOURCE_DIR}/assets)

yarp_install(FILES ${md} DESTINATION ${TEO-SOFTWARE-MANUAL_CONTEXTS_INSTALL_DIR})
yarp_install(DIRECTORY ${assets} DESTINATION ${TEO-SOFTWARE-MANUAL_CONTEXTS_INSTALL_DIR})

# uninstall target
configure_file(
    "${CMAKE_CURRENT_SOURCE_DIR}/cmake/template/TEO_SOFTWARE_MANUALConfigUninstall.cmake.in"
    "${CMAKE_CURRENT_BINARY_DIR}/TEO_SOFTWARE_MANUALConfigUninstall.cmake" IMMEDIATE @ONLY)

add_custom_target(uninstall
    COMMAND ${CMAKE_COMMAND} -P ${CMAKE_CURRENT_BINARY_DIR}/TEO_SOFTWARE_MANUALConfigUninstall.cmake)

