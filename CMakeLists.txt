cmake_minimum_required(VERSION 3.12 FATAL_ERROR)

# Define a project.
project(TEO_DEVELOPER_MANUAL LANGUAGES NONE)

# Find dependencies
find_package(YCM 0.11 REQUIRED)
find_package(YARP 3.2 REQUIRED)

# Set some useful variables - paths relative to the installation prefix.
yarp_configure_external_installation(teo-developer-manual)

# Collect Markdown files. Globbing is evil, but we don't care. All we
# need CMake here for is to support superbuild-like repos through YCM.
file(GLOB md ${CMAKE_SOURCE_DIR}/*.md)

# Install files, create a copy in the local build tree.
yarp_install(FILES ${md}
             DESTINATION ${TEO-DEVELOPER-MANUAL_CONTEXTS_INSTALL_DIR})

# Install directories, create a copy in the local build tree.
yarp_install(DIRECTORY csv
                       fig
                       overview
             DESTINATION ${TEO-DEVELOPER-MANUAL_CONTEXTS_INSTALL_DIR})

# Store the package in the user registry.
set(CMAKE_EXPORT_PACKAGE_REGISTRY ON)

# Create and install config files.
include(InstallBasicPackageFiles)

install_basic_package_files(TEO_DEVELOPER_MANUAL
                            VERSION 0.1.0
                            COMPATIBILITY AnyNewerVersion
                            NO_EXPORT)

# Add uninstall rule.
include(AddUninstallTarget)
